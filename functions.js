/**
 * greet(name):
 * - optionally receives a name
 * - logs "Hello" if there is no name
 * - logs "Hello <name>" if there is a name
 */
function greet(name) {
  if (name) {
    console.log(`Hello ${name}`);
  } else {
    console.log(`Hello`);
  }
}

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 */
function isOdd(n) {
  if (n % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 *
 * Hint: you can solve this without writing any loops!
 */
function oddsSmallerThan(n) {
  return Math.floor(n / 2);
}
/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (n % 2 === 1) {
    return n * n;
  } else {
    return n * 2;
  }
}

/**
 * ageFromCivilID(civilID):
 * - receives a civilID as a STRING of the form <CYYMMDDXXXXX>
 *   where:
 *     - C is the century (1 = 18xx, 2 = 19xx, 3 = 20xx)
 *     - YY is the year (00 - 99)
 *     - MM is the month (01 - 12)
 *     - DD is the date
 * - calculates and returns the age of the civilID holder (rounded down to the nearest year)
 * - assume all civilIDs will be valid
 *
 * Hint: you can use JavaScript's Date() class to make things easier
 *
 * e.g. (if we assume that the date today is September 23 2018):
 *    ageFromCivilID(287050612345) -> 31
 *    ageFromCivilID(297111012345) -> 20
 */
function ageFromCivilID(civilID) {
  let gen;
  let year;
  let month;
  let day;
  gen = 17 + parseInt(civilID[0]);
  let y1 = parseInt(civilID[1]);
  let y2 = parseInt(civilID[2]);
  year = `${gen}` + `${y1}` + `${y2}`;
  let m1 = parseInt(civilID[3]);
  let m2 = parseInt(civilID[4]);
  month = `${m1}` + `${m2}`;
  let d1 = parseInt(civilID[5]);
  let d2 = parseInt(civilID[6]);
  day = `${d1}` + `${d2}`;
  var d = new Date();
  let resyear = d.getFullYear() - year;
  if (month > d.getMonth()) {
    resyear--;
  }
  return resyear;
}
ageFromCivilID("297111012345");
/**
 * canVoteInKuwait(civilID, isKuwaiti, isRoyal):
 * - receives a civilID as a STRING
 * - receives a boolean isKuwaiti
 * - receives a boolean isRoyal
 * - returns true if the person can vote, false otherwise:
 *   In Kuwait the conditions for voting are as follows:
 *    - Over 21
 *    - Is a Kuwaiti citizen
 *    - Is NOT a member of the royal family
 */
function canVoteInKuwait(civilID, isKuwaiti, isRoyal) {
  if (ageFromCivilID(civilID) > 21 && isKuwaiti === true && isRoyal === false) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  greet,
  isOdd,
  oddsSmallerThan,
  squareOrDouble,
  ageFromCivilID,
  canVoteInKuwait
};
