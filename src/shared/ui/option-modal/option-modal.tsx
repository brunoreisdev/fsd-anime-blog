import styles from "./option-modal.module.scss";

function OptionModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  if (!open) return null;

  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.modal}>
        {/* {children} */}
        <ul>
          <li>teste 1</li>
          <li>teste 2</li>
          <li>teste 3</li>
        </ul>
      </div>
    </div>
  )
}

export default OptionModal