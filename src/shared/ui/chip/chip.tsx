import styles from "./chip.module.scss";

function Chip({ label, className }: { label: string; className?: string }) {
  return (
    <div className={`${styles.chipWrapper} ${className}`}>
      <small className="caption">{label}</small>
    </div>
  );
}

export default Chip;
