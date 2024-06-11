import Image from 'next/image';

const Card = ({ title, subtitle, desc, cardLink,ImgSrc }) => {
  return (
    <div className={`card`} >
      <Image src={ImgSrc} alt={title} layout="fill" className="card-img" />
      <div className="info">
      <h1 className="text-xl ">{title}</h1>
        <p>{subtitle}</p>
        <p className=" mb-5 text-justify ">{desc}</p>
        <a className="bg-green text-white p-2 mt-4 news-blog-btn" href={cardLink}  rel="noopener noreferrer">
            Learn More
          </a>
      </div>
    </div>
  );
};

export default Card;