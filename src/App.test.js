import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
    it('should render Malala Yousafzai candidate card', () => {
    // Arrange
      render(<App />);
    // Act
      const candidateCardName = screen.getByText("Malala Yousafzai");
    // Assert
      expect(candidateCardName).toBeInTheDocument();
    });
})
