import { Injectable } from '@nestjs/common';

import { CustomersService } from '../customers.service';
import { sendFormMail } from '../utils/mail';

interface FormField {
  label: string;
  required: boolean;
}

interface UseCaseResult {
  result?: Record<string, string>;
  error?: Error;
  status_code: number;
}

@Injectable()
export default class SendMailUseCase {
  constructor(
    private readonly customersService: CustomersService,
  ) {}

  async execute(data: {
    origin: string;
    form: Record<string, any>;
  }): Promise<UseCaseResult> {
    try {
      const client = await this.customersService.findClientByDomain(data.origin);

      if (!client) {
        return {
          status_code: 404,
          error: new Error(
            'No existe un cliente asociado a este dominio',
          ),
        };
      }

      const validation = this.validateForm(
        client.form,
        data.form,
      );

      if (validation.error) {
        return validation;
      }

      const body = this.createMailBody(
        validation.result!,
        data.origin,
      );

      await this.sendMail(
        client.social_media.form_mail,
        body,
      );

      return {
        status_code: 200,
        result: validation.result,
      };
    } catch (error) {
      return {
        status_code: 500,
        error:
          error instanceof Error
            ? error
            : new Error('Ocurrió un error inesperado'),
      };
    }
  }


  private validateForm(
    clientForm: Record<string, FormField>,
    form: Record<string, any>,
  ): UseCaseResult {
    // Validar campos no configurados
    for (const fieldName of Object.keys(form)) {
      if (!clientForm[fieldName]) {
        return {
          status_code: 400,
          error: new Error(
            `El campo "${fieldName}" no está permitido`,
          ),
        };
      }
    }

    const result: Record<string, string> = {};

    // Validar campos configurados y construir resultado
    for (const [fieldName, fieldConfig] of Object.entries(clientForm)) {
      const value = form[fieldName];

      if (
        fieldConfig.required &&
        (
          value === undefined ||
          value === null ||
          String(value).trim() === ''
        )
      ) {
        return {
          status_code: 400,
          error: new Error(
            `El campo "${fieldName}" es obligatorio`,
          ),
        };
      }

      if (
        value !== undefined &&
        value !== null &&
        String(value).trim() !== ''
      ) {
        result[fieldConfig.label] = String(value);
      }
    }

    return {
      status_code: 200,
      result,
    };
  }

  private createMailBody(
    result: Record<string, string>,
    origin: string,
  ): string {
    const body = Object.entries(result)
      .map(
        ([label, value]) => `
          <strong>${label}</strong>
          <br>
          ${value}
          <br><br>
        `,
      )
      .join('');

    return `
      Formulario de: ${origin}
      <br><br>
      ${body}
    `;
  }

  private async sendMail(
    to: string,
    body: string,
  ): Promise<void> {
    if (process.env.NODE_ENV === 'PROD') {
      await sendFormMail(
        to,
        'Alguien se quiere contactar contigo',
        body,
      );
    } else {
      console.log('Envío de correo');
      console.log(body);
    }
  }
}