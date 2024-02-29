import './Testimonial.css';

const Testimonial = ({ review, name, status }) => {
  return (
    <>
      <span>
        {review}
      </span>
      <span>
        <span style={{ color: 'var(--orange)' }}>
          {name}
        </span>
        <span>{" "}
          - {status}
        </span>
      </span>
    </>
  )
}

export default Testimonial