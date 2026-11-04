import Reveal from "./Reveal";

export default function SectionHeading({
  title,
  intro,
  className = "",
  introWidth = "max-w-[500px]",
  introGap = "mt-20",
}: {
  title: string;
  intro?: string;
  className?: string;
  introWidth?: string;
  introGap?: string;
}) {
  return (
    <Reveal className={className}>
      <h2 className="h-2">{title}</h2>
      {intro ? <p className={`lead ${introGap} ${introWidth}`}>{intro}</p> : null}
    </Reveal>
  );
}
