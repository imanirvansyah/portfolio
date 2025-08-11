export const Button: React.FC<{
  label: string
}> = ({ label, ...props }) => {

  return <button className="btn" {...props}>{label}</button>;
};