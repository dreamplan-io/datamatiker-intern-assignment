const TextBlock = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="my-20 leading-relaxed">
      <h1 className="font-bold mb-3">{title}</h1>
      <p className="text-dp-bodytext-l-m">{text}</p>
    </div>
  );
};

export default TextBlock;
