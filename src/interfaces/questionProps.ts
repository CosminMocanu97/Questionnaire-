interface QuestionInput {
    type: 'input'
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    question: string;
}

interface QuestionCheckbox {
    type: 'checkbox'
    onChange: (key: string) => void;
    options: string[];
    question: string;
    state: string[];
}

interface QuestionRadio {
    type: 'radio',
    options: string[]
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    question: string;
    state: string;
}


export type Sublist = QuestionInput | QuestionCheckbox | QuestionRadio;