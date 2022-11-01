const Section = ({ children, bleed = false, className, props }) => {
  const getWidth = () => {
    if (bleed) {
      return '100%'
    }
    return 'min(65ch, calc(100% - 64px))'
  }

  const styles = {
    gridColumn: '1/4',
    marginInline: 'auto',
    width: getWidth(),
  }

  return className ? (
    <div style={styles} className={className} {...props}>
      {children}
    </div>
  ) : (
    <div style={styles} {...props}>
      {children}
    </div>
  )
}

export default Section
