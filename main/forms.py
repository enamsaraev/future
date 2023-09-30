from django import forms


class DataForm(forms.Form):
    gender_mars = forms.CharField(required=False, 
                                  widget=forms.TextInput(attrs={
                                   'id': 'gender-1',
                                   'name': 'gender',
                                   'type': 'radio',
                                   'value': 'Мужчина',
                                   'class': 'tab-content-input-profile-gender',
                                   'tabindex': '-1'})
                                )
    gender_venus = forms.CharField(required=False, 
                                   widget=forms.TextInput(attrs={
                                   'id': 'gender-2',
                                   'name': 'gender',
                                   'type': 'radio',
                                   'value': 'Женщина',
                                   'class': 'tab-content-input-profile-gender',
                                   'tabindex': '-1'})
                                )
    gender_mars = forms.CharField(required=False, 
                                  widget=forms.TextInput(attrs={
                                   'id': 'gender-1',
                                   'name': 'gender',
                                   'type': 'radio',
                                   'value': 'Мужчина',
                                   'class': 'tab-content-input-profile-gender',
                                   'tabindex': '-1'})
                                )
    gender_venus = forms.CharField(required=False, 
                                   widget=forms.TextInput(attrs={
                                   'id': 'gender-2',
                                   'name': 'gender',
                                   'type': 'radio',
                                   'value': 'Женщина',
                                   'class': 'tab-content-input-profile-gender',
                                   'tabindex': '-1'})
                                )
    city_true = forms.CharField(required=False, 
                                  widget=forms.TextInput(attrs={
                                   'id': 'city-1',
                                   'name': 'city',
                                   'type': 'radio',
                                   'value': 'Да',
                                   'class': 'tab-content-input-profile-city',
                                   'tabindex': '-1'})
                                )
    city_false = forms.CharField(required=False, 
                                   widget=forms.TextInput(attrs={
                                   'id': 'city-2',
                                   'name': 'city',
                                   'type': 'radio',
                                   'value': 'Нет',
                                   'class': 'tab-content-input-profile-city',
                                   'tabindex': '-1'})
                                )
    surname = forms.CharField(required=False,
                                    widget=forms.TextInput(attrs={
                                   'type': 'text',
                                   'class': 'tab-content-input-profile tab-content-input-profile-surname',
                                   'tabindex': '-1',
                                   'placeholder': 'Укажите фамилию',})
                                )
    name = forms.CharField(required=False,
                                    widget=forms.TextInput(attrs={
                                   'type': 'text',
                                   'class': 'tab-content-input-profile tab-content-input-profile-name',
                                   'tabindex': '-1',
                                   'placeholder': 'Укажите имя',})
                                )
    middlename = forms.CharField(required=False,
                                    widget=forms.TextInput(attrs={
                                   'type': 'text',
                                   'class': 'tab-content-input-profile tab-content-input-profile-middlename',
                                   'tabindex': '-1',
                                   'placeholder': 'Укажите отчество (при наличии)',})
                                )
    birthdate = forms.DateField(required=False,
                                    widget=forms.TextInput(attrs={
                                   'type': 'date',
                                   'class': 'tab-content-input-profile tab-content-input-profile-birthdate',
                                   'tabindex': '-1',
                                   'placeholder': 'Укажите дату рождения',})
                                )
    post_index = forms.CharField(required=False,
                                    widget=forms.TextInput(attrs={
                                   'type': 'number',
                                   'class': 'tab-content-input-profile tab-content-input-profile-post-index',
                                   'tabindex': '-1',
                                   'placeholder': 'Укажите почтовый индекс',})
                                )
    account_balance = forms.CharField(required=False,
                                    widget=forms.TextInput(attrs={
                                   'type': 'number',
                                   'class': 'tab-content-input-profile tab-content-input-profile-salary',
                                   'tabindex': '-1',
                                   'placeholder': 'Баланс счета клиента, ₽',})
                                )
    amount_of_conrib = forms.CharField(required=False,
                                    widget=forms.TextInput(attrs={
                                   'type': 'number',
                                   'class': 'tab-content-input-profile tab-content-input-profile-sum',
                                   'tabindex': '-1',
                                   'placeholder': 'Сумма взносов клиента, ₽',})
                                )
    count_of_conrib = forms.CharField(required=False,
                                    widget=forms.TextInput(attrs={
                                   'type': 'number',
                                   'class': 'tab-content-input-profile tab-content-input-profile-sum-count',
                                   'tabindex': '-1',
                                   'placeholder': 'Число взносов клиента',})
                                )
    first_date = forms.CharField(required=False,
                                    widget=forms.TextInput(attrs={
                                   'type': 'date',
                                   'class': 'tab-content-input-profile tab-content-input-profile-first-сontribution',
                                   'tabindex': '-1',
                                   'placeholder': 'Дата первого взноса',})
                                )
    last_date = forms.CharField(required=False,
                                    widget=forms.TextInput(attrs={
                                   'type': 'date',
                                   'class': 'tab-content-input-profile tab-content-input-profile-last-сontribution',
                                   'tabindex': '-1',
                                   'placeholder': 'Дата последнего взноса',})
                                )
    amount_of_income = forms.CharField(required=False,
                                    widget=forms.TextInput(attrs={
                                   'type': 'number',
                                   'class': 'tab-content-input-profile tab-content-input-profile-sum-contribution',
                                   'tabindex': '-1',
                                   'placeholder': 'Сумма дохода начисленного на счет клиента, ₽',})
                                )
    operation_size = forms.CharField(required=False,
                                    widget=forms.TextInput(attrs={
                                   'type': 'number',
                                   'class': 'tab-content-input-profile tab-content-input-profile-contribution-amount',
                                   'tabindex': '-1',
                                   'placeholder': 'Размер операций по счету клиента, ₽',})
                                )