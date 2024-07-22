from django.db import models

class Item(models.Model):

    first_name = models.CharField(max_length=100, default='')
    middle_name = models.CharField(max_length=100, blank=True, default='')
    last_name = models.CharField(max_length=100, default='')
    address = models.TextField(default='')
    email = models.EmailField(max_length=100, default='')
    phone = models.CharField(max_length=15, default='')
    date_of_birth = models.DateField(null=True, blank=True)
    place_of_birth = models.CharField(max_length=100, blank=True, default='')
    sex = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female')], default='')
    civil_status = models.CharField(max_length=20, choices=[('Single', 'Single'), ('Married', 'Married'), ('Separated', 'Separated'), ('Divorced', 'Divorced'),('Widowed', 'Widowed')], default='')
    height = models.FloatField(null=True, blank=True)
    weight = models.FloatField(null=True, blank=True)
    blood_type = models.CharField(max_length=3, blank=True, default='')
    occupation = models.CharField(max_length=100, blank=True, default='')
    pag_ibig_id_no = models.CharField(max_length=20, blank=True, default='')
    philhealth_no = models.CharField(max_length=20, blank=True, default='')
    sss_no = models.CharField(max_length=20, blank=True, default='')
    zip_code = models.CharField(max_length=10, blank=True, default='')
    citizenship = models.CharField(max_length=100, blank=True, default='')
    fathers_first_name = models.CharField(max_length=100, blank=True, default='')
    fathers_middle_name = models.CharField(max_length=100, blank=True, default='')
    fathers_last_name = models.CharField(max_length=100, blank=True, default='')
    mothers_maiden_first_name = models.CharField(max_length=100, blank=True, default='')
    mothers_maiden_middle_name = models.CharField(max_length=100, blank=True, default='')
    mothers_maiden_last_name = models.CharField(max_length=100, blank=True, default='')


    def __str__(self):
        return f"{self.first_name} {self.last_name}"