const CustomPin = ({ color = "#E02424" }: { color?: string }) => (
    <svg width="28" height="40" viewBox="0 0 24 36" fill="none">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 7.5 12 24 12 24s12-16.5 12-24c0-6.627-5.373-12-12-12Z" fill={color} />
        <circle cx="12" cy="11" r="5" fill="white" />
    </svg>
);

export default CustomPin;
