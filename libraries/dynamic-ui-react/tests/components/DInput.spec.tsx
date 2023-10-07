import { render } from '@testing-library/react';
import DInput from '../../src/components/DInput';

it('should render my component', () => {
  const input = {
    id: 'inputId',
    label: 'Label',
    value: 'Value',
    placeholder: 'Input',
  };

  const { container } = render(
    <DInput {...input} />
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="d-input"
      >
        <label
          for="inputId"
        >
          Label
        </label>
        <div
          class="d-input-control"
        >
          <div
            class="input-group"
          >
            <input
              aria-describedby="inputIdAdd inputIdHint"
              aria-label="Label"
              class="form-control"
              id="inputId"
              placeholder="Input"
              type="text"
              value="Value"
            />
          </div>
        </div>
      </div>
    </div>
  `);
});
