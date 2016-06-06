'use strict';

angular.module('awesome-app.common.features.team-member').factory('TeamMemberCollection', function (AbstractEntity, TeamMemberModel) {

    var TeamMemberCollection = AbstractEntity.extend({
        /**
         * Initialize collection
         * @param {String} collectionName
         */
        initialize: function (collectionName) {
            this.collectionName = collectionName;
            this.models = [];
        },
        /**
         * Get team name
         * @returns {String}
         */
        getTeamName: function () {
            return this.collectionName;
        },
        /**
         * Get members
         * @returns {Array}
         */
        getMembers: function () {
            return this.models;
        },
        /**
         * Add member
         * @param {TeamMemberModel} member
         * @returns {TeamMemberCollection}
         */
        addMember: function (member) {
            if (member instanceof TeamMemberModel) {
                this.models.push(member);
            }
            return this;
        },
        /**
         * Remove member
         * @param {Int} memberId
         * @returns {TeamMemberCollection}
         */
        removeMember: function (memberId) {
            for (var i = 0; i < this.models.length; i++) {
                if (this.models[i].getId() === memberId) {
                    this.models.splice(i, 1);
                    break;
                }
            }
            return this;
        }
    });

    return TeamMemberCollection;
});