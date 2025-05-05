
import { test, expect } from '@playwright/test';

test('registrar novo usuário', async ({ page }) => {
  await page.goto('http://localhost:3000/Registrar');
  await page.fill('input[name="nome"]', 'Gabriel Teste');
  await page.fill('input[name="email"]', 'gabriel@teste.com');
  await page.fill('input[name="senha"]', '12345678');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/.*User/);
});
