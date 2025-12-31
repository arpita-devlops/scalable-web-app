export default function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`glass-effect rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

