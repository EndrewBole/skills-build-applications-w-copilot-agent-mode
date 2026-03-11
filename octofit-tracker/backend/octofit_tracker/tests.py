from django.test import TestCase
from octofit_tracker.models import User, Team, Activity, Workout, Leaderboard

class ModelTest(TestCase):
    def test_team_creation(self):
        team = Team.objects.create(name='Test Team')
        self.assertEqual(team.name, 'Test Team')

    def test_user_creation(self):
        team = Team.objects.create(name='Test Team')
        user = User.objects.create(name='Test User', email='test@user.com', team_id=str(team.id))
        self.assertEqual(user.email, 'test@user.com')

    def test_activity_creation(self):
        team = Team.objects.create(name='Test Team')
        user = User.objects.create(name='Test User', email='test@user.com', team_id=str(team.id))
        activity = Activity.objects.create(user_id=str(user.id), type='Running', duration=30, date='2026-03-11')
        self.assertEqual(activity.type, 'Running')

    def test_workout_creation(self):
        workout = Workout.objects.create(name='Test Workout', description='Desc', suggested_for='Test')
        self.assertEqual(workout.name, 'Test Workout')

    def test_leaderboard_creation(self):
        team = Team.objects.create(name='Test Team')
        leaderboard = Leaderboard.objects.create(team_id=str(team.id), points=50)
        self.assertEqual(leaderboard.points, 50)
