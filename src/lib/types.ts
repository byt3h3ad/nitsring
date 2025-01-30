type Department = 'ECE' | 'CSE' | 'ME' | 'CE' | 'EE' | 'EIE';

export type Site = {
	name: string;
	url: string;
	year: number;
	department: Department;
};
