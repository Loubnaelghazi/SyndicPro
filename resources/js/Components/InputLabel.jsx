export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block text-sm font-medium leading-6 text-gray-900  mt-4 ` + className}>
            {value ? value : children}
        </label>
    );
   
}
