import _ from 'lodash';

const map = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

const dnaToRna = (dna) => {
  const rna = [];

  for (const nucleotide of dna) {
    if (!_.has(map, nucleotide)) {
      return null;
    }

    rna.push(map[nucleotide]);
  }

  return rna.join('');
};

export default dnaToRna;

dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
dnaToRna('CCGTA'); // 'GGCAU'
dnaToRna(''); // ''
dnaToRna('ACNTG'); // null
