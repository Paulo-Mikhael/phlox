interface Props{
  src: string,
  alt?: string,
  title?: string,
  loading?: "eager" | "lazy" | undefined,
  className?: string,
  description?: string,
  width?: string
}

export default function Picture({ src, alt, title, loading, className, description, width }: Props){
  return (
    <figure>
      <img 
        src={src} 
        alt={`${alt ? alt : src}`} 
        title={`${title ? title : src}`} 
        loading={loading ? loading : "lazy"}
        className={`${className} ${width ? width : 'w-20'}`}
      />
      {description && <figcaption>{description}</figcaption> }
    </figure>
  );
}