const PlusSvg = ({ className = "" }) => {
  return (
    <svg className={`${className} || ""`} width="11" height="11" fill="none">
      <circle cx="6" cy="6" r="5"
        fill="#ada8c4"
      />
    </svg>
  );
};

export default PlusSvg;
