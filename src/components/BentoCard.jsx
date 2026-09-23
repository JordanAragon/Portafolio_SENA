export default function BentoCard({ className = "", children }) {
  return <article className={`bento-card ${className}`}>{children}</article>;
}
