const TextBlock = ({ title, text }: { title: string; text: Array<String> }) => {
  return (
    <div className="mt-20 leading-relaxed">
      <h1 className="font-bold mb-3 text-dp-headline-5-m md:text-dp-headline-3-m xl:text-dp-headline-2-m">
        {title}
      </h1>
      {text.map(() => (
        <p className="text-dp-bodytext-l-m mb-8">{text}</p>
      ))}
    </div>
  );
};

export default TextBlock;
