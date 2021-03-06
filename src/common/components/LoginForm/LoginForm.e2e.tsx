import { Selector } from 'testcafe';

// to fix testcafe + jest type collision
declare const test: TestFn;

fixture`First test with TestCafe`.page`http://localhost:3000/muindex`;

test('Validate login form', async (t) => {
  const email = 'valid@email.cl';
  const password = 'contraseña';

  const emailInput = Selector('#email');
  const emailInputExists = emailInput.exists;

  const passwordInput = Selector('#password');
  const passwordInputExists = passwordInput.exists;

  await t
    .expect(emailInputExists)
    .ok()
    .typeText(emailInput, email)
    .expect(emailInput.value)
    .eql(email)

    .expect(passwordInputExists)
    .ok()
    .typeText(passwordInput, password)
    .expect(passwordInput.value)
    .eql(password)

    .click('button[type=submit]')
    .expect(Selector('.MuiAlert-message').innerText)
    .eql('Sesión iniciada correctamente.');
});
