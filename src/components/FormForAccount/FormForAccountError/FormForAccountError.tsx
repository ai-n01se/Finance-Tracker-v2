export default function FormForAccountError({
  errors,
}: {
  errors: Record<string, string>;
}) {
  return (
    <div className=' absolute top-[-40px] text-xs text-red-500 '>
      {errors.description && <p>{errors.description}</p>}
      {errors.amount && <p>{errors.amount}</p>}
    </div>
  );
}
