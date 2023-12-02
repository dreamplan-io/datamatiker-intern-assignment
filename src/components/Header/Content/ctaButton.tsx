import Link from 'next/link';

interface ButtonProps {
  href: string;
  text: string;
}

const CtaButton = (props: ButtonProps) => {
  return (
    <div className="flex justify-center">
      <Link href={props.href}>
        <a className="bg-dp-blue-500 text-white w-fit px-8 py-4 rounded-full text-dp-bodytext-m-dt font-semibold hover:scale-105 hover:shadow-lg transition ease-in-out duration-300">
          {props.text}
        </a>
      </Link>
    </div>
  );
};

export default CtaButton;
