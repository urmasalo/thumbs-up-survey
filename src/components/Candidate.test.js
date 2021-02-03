import { fireEvent, render, screen } from '@testing-library/react';
import Candidate from './Candidate';

describe("Candidate", () => {
    it('should render the candidate name', () => {
        // Arrange
        const candidateName = "Mauricio Salazar"
        render(<Candidate name={candidateName} />);
        // Act
         const candidateCardName = screen.getByText("Mauricio Salazar");
        // Assert
        expect(candidateCardName).toBeInTheDocument();
    });
    it('should render candidate description', () => {
        // Arrange
        const candidateDescription = "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero."
        render(<Candidate description={candidateDescription} />);
        // Act
        const candidateCardDescription = screen.getByText("Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.");
        // Assert
        expect(candidateCardDescription).toBeInTheDocument();
    });
    it('should rendender candidate last update', () => {
        // Arrange
        const candidateLastUpdate = "2 month ago"
        render(<Candidate last_update={candidateLastUpdate} />);
        // Act
        const candidateCardLastUpdate = screen.getByText("2 month ago");
        // Assert
        expect(candidateCardLastUpdate).toBeInTheDocument();
    });
    it('should rendender candidate categorie', () => {
        // Arrange
        const candidateCategorie = "Politics"
        render(<Candidate categories={candidateCategorie} />);
        // Act
        const candidateCardCategories = screen.getByText(/Politics/i);
        // Assert
        expect(candidateCardCategories).toBeInTheDocument();
    });

    it('popularity should increase if user votes thumbs up', () => {
        // Arrange
        render(<Candidate/>);
        // Act
        fireEvent.click(screen.getByTestId('thumbs-up'))
        fireEvent.click(screen.getByText('Vote now'))
        const popularity = screen.getByText("100");
        // Assert
        expect(popularity).toBeInTheDocument();
    });

    it('popularity should be 50% when votes are equal', () => {
        // Arrange
        render(<Candidate/>);
        // Act
        fireEvent.click(screen.getByTestId('thumbs-up'))
        fireEvent.click(screen.getByText('Vote now'))
        fireEvent.click(screen.getByText('Vote Again'))
        fireEvent.click(screen.getByTestId('thumbs-down'))
        fireEvent.click(screen.getByText('Vote now'))
        const popularity = screen.getAllByText("50")[0];
        // Assert
        expect(popularity).toBeInTheDocument();
    });

    it('should show Thank you for voting!', () => {
        // Arrange
        render(<Candidate/>);
        // Act
        fireEvent.click(screen.getByTestId('thumbs-up'))
        fireEvent.click(screen.getByText('Vote now'))
        const message = screen.getByText("Thank you for voting!");
        // Assert
        expect(message).toBeInTheDocument();
    });


})