export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 text-primary-color shadow-sm focus:ring-primary-color ' +
                className
            }
        />
    );
}
