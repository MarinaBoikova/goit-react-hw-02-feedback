import s from './Sections.module.css';

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={s.title}>{title}</h2>
      {children}
    </>
  );
};

export default Section;
