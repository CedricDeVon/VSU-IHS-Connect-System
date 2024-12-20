import { EmptyValidator } from './emptyValidator';
import { FloatValidator } from './floatValidator';
import { NumberValidator } from './numberValidator';
import { BooleanValidator } from './booleanValidator';
import { NumberRangeValidator } from './numberRangeValidator';
import { FloatRangeValidator } from './floatRangeValidator';
import { PersonNameValidator } from './personNameValidator';
import { EmailValidator } from './emailValidator';
import { PasswordValidator } from './passwordValidator';
import { PhoneNumberValidator } from './phoneNumberValidator';
import { URLValidator } from './urlValidator';
import { DataURIValidator } from './dataURIValidator';
import { JSONValidator } from './jsonValidator';
import { JSONWebTokenValidator } from './jsonWebToken';
import { UserLoginValidator } from './userLoginValidator';
import { UserSignUpSet1Validator } from './userSignUpSet1Validator';
import { UserSignUpSet2Validator } from './userSignUpSet2Validator';
import { UserNameValidator } from './userNameValidator';
import { ConfirmPasswordValidator } from './confirmPasswordValidator';
import { UserExistenceValidator } from './userExistenceValidator';
import { UserPasswordHashValidator } from './userPasswordHashValidator';
import { VSUIssuedIdValidator } from './vsuIssuedIdValidator';
import { BirthDateValidator } from './birthDateValidator';
import { SuffixValidator } from './suffixValidator';
import { GenderValidator } from './genderValidator';
import { SectionIdValidator } from './sectionIdValidator';

export class Validators {
    private static readonly _sectionIdValidator: SectionIdValidator = new SectionIdValidator();

    private static readonly _suffixValidator: SuffixValidator = new SuffixValidator();

    private static readonly _genderValidator: GenderValidator = new GenderValidator();

    private static readonly _studentGradeValidator: NumberRangeValidator = new NumberRangeValidator(7, 10);

    private static readonly _emptyValidator: EmptyValidator = new EmptyValidator();

    private static readonly _floatValidator: FloatValidator = new FloatValidator();
    
    private static readonly _numberValidator: NumberValidator = new NumberValidator();

    private static readonly _booleanValidator: BooleanValidator = new BooleanValidator();
    
    private static readonly _personAgeValidator: NumberRangeValidator = new NumberRangeValidator(0, 128);
    
    private static readonly _personNameValidator: PersonNameValidator = new PersonNameValidator();
    
    private static readonly _emailValidator: EmailValidator = new EmailValidator();
    
    private static readonly _passwordValidator: PasswordValidator = new PasswordValidator();

    private static readonly _phoneNumberValidator: PhoneNumberValidator = new PhoneNumberValidator();
    
    private static readonly _gradeValidator: FloatRangeValidator = new FloatRangeValidator(0, 100);
    
    private static readonly _urlValidator: URLValidator = new URLValidator();
    
    private static readonly _dataURIValidator: DataURIValidator = new DataURIValidator();

    private static readonly _jsonValidator: JSONValidator = new JSONValidator();
    
    private static readonly _jsonWebTokenValidator: JSONWebTokenValidator = new JSONWebTokenValidator();

    private static readonly _userLoginValidator: UserLoginValidator = new UserLoginValidator();

    private static readonly _userSignUpSet1Validator: UserSignUpSet1Validator = new UserSignUpSet1Validator();

    private static readonly _userNameValidator: UserNameValidator = new UserNameValidator();

    private static readonly _confirmPasswordValidator: ConfirmPasswordValidator = new ConfirmPasswordValidator();

    private static readonly _userExistenceValidator: UserExistenceValidator = new UserExistenceValidator();
    
    private static readonly _userSignUpSet2Validator: UserSignUpSet2Validator = new UserSignUpSet2Validator();
    
    private static readonly _userPasswordHashValidator: UserPasswordHashValidator = new UserPasswordHashValidator();

    private static readonly _vsuIssuedIdValidator: VSUIssuedIdValidator = new VSUIssuedIdValidator();

    private static readonly _birthDateValidator: BirthDateValidator = new BirthDateValidator();

    public static get studentGradeValidator(): NumberRangeValidator {
        return Validators._studentGradeValidator;
    }

    public static get sectionIdValidator(): SectionIdValidator {
        return Validators._sectionIdValidator;
    }

    public static get suffixValidator(): SuffixValidator {
        return Validators._suffixValidator;
    }

    public static get genderValidator(): GenderValidator {
        return Validators._genderValidator;
    }

    public static get birthDateValidator(): BirthDateValidator {
        return Validators._birthDateValidator;
    }

    public static get vsuIssuedIdValidator(): VSUIssuedIdValidator {
        return Validators._vsuIssuedIdValidator;
    }

    public static get userPasswordHashValidator(): UserPasswordHashValidator {
        return Validators._userPasswordHashValidator;
    }

    public static get userSignUpSet2Validator(): UserSignUpSet2Validator {
        return Validators._userSignUpSet2Validator;
    }

    public static get userExistenceValidator(): UserExistenceValidator {
        return Validators._userExistenceValidator;
    }

    public static get confirmPasswordValidator(): ConfirmPasswordValidator {
        return Validators._confirmPasswordValidator;
    }
    
    public static get emptyValidator(): EmptyValidator {
        return Validators._emptyValidator;
    }
    
    public static get floatValidator(): FloatValidator {
        return Validators._floatValidator;
    }
    
    public static get numberValidator(): NumberValidator {
        return Validators._numberValidator;
    }
    
    public static get booleanValidator(): BooleanValidator {
        return Validators._booleanValidator;
    }
    
    public static get personAgeValidator(): NumberRangeValidator {
        return Validators._personAgeValidator;
    }

    public static get personNameValidator(): PersonNameValidator {
        return Validators._personNameValidator;
    }

    public static get emailValidator(): EmailValidator {
        return Validators._emailValidator;
    }

    public static get passwordValidator(): PasswordValidator {
        return Validators._passwordValidator;
    }
    
    public static get phoneNumberValidator(): PhoneNumberValidator {
        return Validators._phoneNumberValidator;
    }

    public static get gradeValidator(): FloatRangeValidator {
        return Validators._gradeValidator;
    }

    public static get urlValidator(): URLValidator {
        return Validators._urlValidator;
    }

    public static get dataURIValidator(): DataURIValidator {
        return Validators._dataURIValidator;
    }
    
    public static get jsonValidator(): JSONValidator {
        return Validators._jsonValidator;
    }
    
    public static get jsonWebTokenValidator(): JSONWebTokenValidator {
        return Validators._jsonWebTokenValidator;
    }

    public static get userLoginValidator(): UserLoginValidator {
        return Validators._userLoginValidator;
    }

    public static get userSignUpSet1Validator(): UserSignUpSet1Validator {
        return Validators._userSignUpSet1Validator;
    }

    public static get userNameValidator(): UserNameValidator {
        return Validators._userNameValidator;
    }
}
