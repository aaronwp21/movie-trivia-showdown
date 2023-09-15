import { gql } from 'graphql-request';

const AllCategories = gql`
  query AllCategories {
    actionMoviess {
      answer
      question
      questionNumber
    }
    animatedMoviess {
      answer
      question
      questionNumber
    }
    fantasyMoviess {
      answer
      question
      questionNumber
    }
    movieReleaseDatess {
      answer
      question
      questionNumber
    }
    ninetiesMoviess {
      answer
      question
      questionNumber
    }
    nolanMoviess {
      answer
      question
      questionNumber
    }
    sciFiMoviess {
      answer
      question
      questionNumber
    }
    scorseseMoviess {
      answer
      question
      questionNumber
    }
    sportsMoviess {
      answer
      question
      questionNumber
    }
    starWarss {
      question
      questionNumber
      answer
    }
  }
`;

export { AllCategories };