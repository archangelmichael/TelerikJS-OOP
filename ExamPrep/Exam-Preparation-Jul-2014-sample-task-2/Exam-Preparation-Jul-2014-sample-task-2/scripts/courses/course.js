define(function() {
    'use strict';
    var Course;
    Course = (function() {
        function Course(title, scoreFormula) {
            this._title = title;
            this._score = scoreFormula;
            this._students = [];
        }

        Course.prototype.addStudent =  function (student) {
            this._students.push(student);
        };

        Course.prototype.calculateResults =  function () {
            var self = this;
            this._students.forEach(function (student) {
                student.totalResult = self._score(student);
            });
        };

        Course.prototype.getTopStudentsByExam =  function (count) {
            return sortStudents(this._students, count, 'exam');
        };

        Course.prototype.getTopStudentsByTotalScore =  function (count) {
            return sortStudents(this._students, count, 'totalResult');
        };

        function sortStudents(students, count, sortBy) {
            students.sort(function (first, second) {
                return second[sortBy] - first[sortBy];
            });

            return students.slice(0, count);
        }

        return Course;
    })();

    return Course;
});