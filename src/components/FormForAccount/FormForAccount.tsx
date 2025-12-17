import './FormForAccount.css';

export default function FormForAccount() {
  return (
    <section className='form-for-account'>
      <form action='finance_form'>
        <input
          type='text'
          name='description'
          id='description'
          placeholder='Description'
        />
        <input type='number' name='amount' id='amount' placeholder='amount' />
        <select name='finance_type' id='finance_type'>
          <option value='income'>Income</option>
          <option value='expense'>Expense</option>
        </select>
        <button type='submit' id='submit'>
          Add
        </button>
      </form>
    </section>
  );
}
