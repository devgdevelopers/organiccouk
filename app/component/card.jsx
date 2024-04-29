import React from "react";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("/data.json");
  const repo = await res.json();
  console.log(repo);
  // Pass data to the page via props
  return { props: { repo } };
}

export default function Card({ repo }) {
  return (
    <main>
      <p>{repo?.name}</p>
    </main>
  );
}
