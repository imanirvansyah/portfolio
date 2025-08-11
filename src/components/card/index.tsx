import Image from "next/image";
import React from "react";
export const Card: React.FC<{
  image: string;
  title: string;
  categories: IBadgeProps[];
  desc: string;
}> = ({
  image,
  title,
  categories,
  desc
}) => {
    return (
      <div className='card'>
        <Image
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
          }}
          width={500}
          height={250}
          src={image} alt="thumbnail"
        />
        <h2 style={{
          margin: "1rem 0",
          textTransform: "capitalize"
        }}>{title}</h2>
        <div style={{
          position: "absolute",
          bottom: "2rem",
        }}>
          <div style={{
            display: "flex",
            gap: "0.5rem",
            marginBottom: ".5rem"
          }}>
            {
              categories.map((category) => (
                <Badge key={category.label} label={category.label} color={category.color} />
              ))
            }
          </div>
          <p>{desc}</p>
        </div>
      </div>
    )
  }


interface IBadgeProps {
  label: string;
  color: string;
}

const Badge: React.FC<IBadgeProps> = ({
  label,
  color = "gray"
}) => {
  return (
    <span style={{
      backgroundColor: color,
      padding: "0.2rem 1rem",
      borderRadius: "999px",
      fontSize: "0.875rem",
    }}>{label}</span>
  )
}