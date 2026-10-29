describe('initializePipelineDemo', () => {
  let actionButton;
  let statusMessage;
  let loadHandler;
  let initializePipelineDemo;

  beforeEach(() => {
    statusMessage = { textContent: 'Loading application status...' };
    actionButton = { addEventListener: jest.fn() };
    global.document = {
      getElementById: jest.fn((id) => {
        if (id === 'status-msg') {
          return statusMessage;
        }

        if (id === 'action-btn') {
          return actionButton;
        }
      }),
    };
    global.window = {
      addEventListener: jest.fn((event, handler) => {
        if (event === 'load') {
          loadHandler = handler;
        }
      }),
    };

    jest.resetModules();
    ({ initializePipelineDemo } = require('../src/app'));
  });

  afterEach(() => {
    delete global.document;
    delete global.window;
  });

  test('initializes the page when the window loads', () => {
    expect(global.window.addEventListener).toHaveBeenCalledWith(
      'load',
      initializePipelineDemo,
    );

    loadHandler();

    expect(statusMessage.textContent).toBe(
      'Application loaded successfully. Ready to run task.',
    );
    expect(actionButton.addEventListener).toHaveBeenCalledWith(
      'click',
      expect.any(Function),
    );
  });

  test('updates the status when the task button is clicked', () => {
    initializePipelineDemo();
    const clickHandler = actionButton.addEventListener.mock.calls[0][1];

    clickHandler();

    expect(statusMessage.textContent).toBe(
      'System is operating nominally. SCM pipeline passed!',
    );
  });
});
