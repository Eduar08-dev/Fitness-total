// api/gemini.js (Next.js API Route)
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await fetch('https://api.generative.ai/v1/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEX_PUBLIC_GEMINI_API_KEY}`,
        },
        body: JSON.stringify({ prompt: req.body.message }),
      });

      if (!response.ok) {
        throw new Error('Error al conectar con la API');
      }

      const data = await response.json();
      res.status(200).json({ reply: data.reply });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al procesar la solicitud.' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido.' });
  }
}
