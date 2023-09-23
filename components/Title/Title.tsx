interface TitleProps {
  title: string;
  className?: string;
}

const Title = ({ title, className }: TitleProps) => {
  return (
    <>
      <h2 className={`heading-title ${className}`}>{title}</h2>
    </>
  );
};

export default Title;
