import { NextRequest, NextResponse } from 'next/server';
import { geminiModel } from '@/lib/gemini';
import { gymInfo } from '@/data/gym-info';

export async function POST(req) {
  try {
    const { message } = await req.json();

    const chat = geminiModel.startChat({
      history: [
        {
          role: "user",
          parts: "Eres un asistente virtual para Fitness Total Gym. Usa la siguiente información para responder preguntas de los clientes. Si no tienes la información específica, sé honesto y sugiere que contacten directamente al gimnasio.",
        },
        {
          role: "model",
          parts: "Entendido. Estoy listo para ayudar a los clientes de Fitness Total Gym con la información proporcionada. Seré preciso y honesto en mis respuestas, y sugeriré contactar directamente al gimnasio si no tengo la información específica.",
        },
        {
          role: "user",
          parts: gymInfo,
        },
        {
          role: "model",
          parts: "Gracias por proporcionarme esta información detallada sobre Fitness Total Gym. Estoy listo para responder preguntas de los clientes sobre los servicios, horarios, clases, entrenadores y membresías del gimnasio. Si alguna pregunta va más allá de esta información, recomendaré que se pongan en contacto directamente con el gimnasio.",
        },
      ],
    });

    const result = await chat.sendMessage(message);
    const response = result.response;

    return NextResponse.json({ reply: response.text() });
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    return NextResponse.json({ error: 'Error al procesar la solicitud' }, { status: 500 });
  }
}

