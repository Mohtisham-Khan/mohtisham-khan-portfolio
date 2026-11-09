import Reveal from "./Reveal";

export default function SectionHeading({
  title,
  intro,
  className = "",
  headingClassName = "type-1",
  introWidth = "max-w-[500px]",
  introGap = "mt-5",
}: {
  title: string;
  intro?: string;
  className?: string;
  headingClassName?: string;
  introWidth?: string;
  introGap?: string;
}) {
  return (
    <Reveal className={className}>
      <div>
        <h2 className={headingClassName}>{title}</h2>
      </div>
      {intro ? <p className={`lead ${introGap} ${introWidth}`}>{intro}</p> : null}
    </Reveal>
  );
}
