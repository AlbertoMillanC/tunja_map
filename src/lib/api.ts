import { Obra, ApiResponse } from '@/types';

export async function fetchObras(): Promise<ApiResponse<Obra[]>> {
  try {
    const response = await fetch('/api/obras');
    const data = await response.json();
    return { data };
  } catch (error) {
    return { 
      data: [], 
      error: 'Error al cargar las obras' 
    };
  }
}

export async function sendContactForm(data: FormData): Promise<ApiResponse<{ message: string }>> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: data
    });
    const result = await response.json();
    return { data: result };
  } catch (error) {
    return { 
      data: { message: '' }, 
      error: 'Error al enviar el formulario' 
    };
  }
}
