"use client"
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [aboutData, setAboutData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/about');
        const data = await response.json();
        setAboutData(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      {error ? (
        <p>Error fetching About Us data: {error.message}</p>
      ) : aboutData ? (
        <p>{aboutData.content}</p>
      ) : (
        <p>Loading About Us data...</p>
      )}
    </div>
  );
}