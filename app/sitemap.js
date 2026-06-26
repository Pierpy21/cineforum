export default async function sitemap() {
  const baseUrl = 'https://cineforumbelpasso.it';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly', // Aggiornato settimanalmente durante il cineforum
      priority: 1.0,
    },
  ];
}