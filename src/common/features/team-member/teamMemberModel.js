'use strict';

angular.module('awesome-app.common.features.team-member').factory('TeamMemberModel', function (AbstractEntity) {

    var TeamMemberModel = AbstractEntity.extend({
        /**
         * Initialize object
         * @param {String} name
         */
        initialize: function (id, name, age, grade, job) {
            this.id;
            this.name = name;
            this.age = age;
            this.grade = grade;
            this.job = job;
        },
        /**
         * Get id
         * @returns {Integer}
         */
        getId: function () {
            return this.id;
        },
        /**
         * Get name
         * @returns {String}
         */
        getName: function () {
            return this.name;
        }
    });

    return TeamMemberModel;
});