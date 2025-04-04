# Generated by Django 5.1.6 on 2025-03-15 17:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('subscriptions', '0003_rename_active_package_status_subscription'),
    ]

    operations = [
        migrations.CreateModel(
            name='PromotionCode',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=50, unique=True)),
                ('stripe_promotion_id', models.CharField(max_length=100, unique=True)),
                ('is_active', models.BooleanField(default=True)),
            ],
        ),
    ]
