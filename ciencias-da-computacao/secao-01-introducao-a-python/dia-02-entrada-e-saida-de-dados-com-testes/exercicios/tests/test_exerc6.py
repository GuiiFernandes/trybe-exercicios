import pytest
from email_validator import EmailNotValidError
from exerc6 import email_format_verify, validate2


def test_email_validator():
    assert email_format_verify("guifjj92@gmail.com") is None
    with pytest.raises(EmailNotValidError):
        email_format_verify("guifjj92gmail.com")
    with pytest.raises(EmailNotValidError):
        email_format_verify("9guifjj@92gmail.com")


def test_validate2():
    assert validate2("guifjj_92@gmail.com") is None
    with pytest.raises(ValueError):
        validate2("guifjj_92@gmailcom")
    with pytest.raises(ValueError):
        validate2("9guif_jj@gmail.com")
    with pytest.raises(ValueError):
        validate2("guifjj_92gmail.com")
