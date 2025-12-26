export default function FormForAccountError({
  errors,
}: {
  errors: Record<string, string>;
}) {
  return (
    <div className='form-for-account-error'>
      {errors.description && <p>{errors.description}</p>}
      {errors.amount && <p>{errors.amount}</p>}
    </div>
  );
}
