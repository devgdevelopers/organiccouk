export default async function handler(req, res) {
    // Simulate fetching data from an API or database
    const aboutData = { content: "This is the About Us content!" };
    res.status(200).json(aboutData);
  }