//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;
//using System.Text;
//using System.Text.RegularExpressions;
//using common = PSIntranet.Common;
//using myService = PSIntranet.ASPDesktop.PSIntranetService;
//using System.Web.SessionState;




//namespace PSIntranet.ASPDesktop.Handlers
//{
    
//    /// <summary>
//    ///  Time Report-tal kapcsolatos szervíz generic handlerje
//    /// </summary>
//    public class TRS_Handler : IHttpHandler, IReadOnlySessionState
//    {

//        private StringBuilder stringbuild;

//        //localhost service URL (VL):
//        //http://localhost:58614/ServiceBase/PSIntranetServiceBase.svc

//        //http://localhost:1729/ServiceBase/PSIntranetServiceBase.svc
//        //PS TR-WEB server (KZ):
//        //http://tr-web/PSIntranet/PSIntranetServiceDevTest2/ServiceBase/PSIntranetServiceBase.svc
//        //http://tr-web/PSIntranet/PSIntranetService/ServiceBase/PSIntranetServiceBase.svc


//        //PS TR-WEB server Internal and External (KZ):
//        //https://inside.process-solutions.hu/PSIntranet/PSIntranetService/ServiceBase/PSIntranetServiceBase.svc

//        //PS TR-WEB Test server  Internal and External (KZ):
//        //
//        //https://inside.process-solutions.hu/PSIntranet/PSIntranetServiceDevTest/ServiceBase/PSIntranetServiceBase.svc
//        //https://inside.process-solutions.hu/PSIntranet/PSIntranetServiceLiveDb/ServiceBase/PSIntranetServiceBase.svc
//        //https://inside.process-solutions.hu/PSIntranet/PSIntranetServiceControlling/ServiceBase/PSIntranetServiceBase.svc

//        public void ProcessRequest(HttpContext context)
//        {

//            stringbuild = new StringBuilder();
//            myService.RequestItem clientRequest = new myService.RequestItem();
//            HelperClasses.Serializer srl = new HelperClasses.Serializer();
//            myService.BasicHttpBinding_IPSIntranetService_TRS srv = new myService.BasicHttpBinding_IPSIntranetService_TRS();
//            myService.ResponseItem resp = new myService.ResponseItem();
           
           
//            try
//            {
//                //kliensből érkező request deserialize
//                string strRequest = context.Request.Form[common.Constants.ServiceConstants.REQUESTITEM];

//                //VL 2013.10.22. TODO request null -> custom exception invalidrequest 
//                //VL 2013.10.22. TODO request IsServerValidated = false end response


//                clientRequest = srl.NTSoftJsonDeserialize<myService.RequestItem>(strRequest);
//                int userid;
//                int.TryParse(context.Session["loggedUserId"].ToString(), out userid);
//                clientRequest.UserId = userid;
//                clientRequest.UserName = context.Session["loggedUserName"].ToString();

//                stringbuild.Append(clientRequest.RequestLog);
//                stringbuild.Append("asp_start: " + DateTime.Now.ToString() + ",");

//                clientRequest.RequestLog = stringbuild.ToString();

//                clientRequest.RequestId = Guid.NewGuid().ToString();
//                // kéréstől függő beállítások


//                switch (clientRequest.ServiceMethod)
//                {
//                    #region TRS Get

//                    case myService.ServiceMethod.TRS_GetTimeReportByUser_View_Data:
//                        {// Sziasztok, Endre vagyok!!!! 2013 aug 8
//                            resp = srv.TRS_GetTimeReportByUser_View_Data(clientRequest);
//                            break;
//                        }

//                    case myService.ServiceMethod.TRS_GetTimeReportByUser_Input_Data:
//                        {
//                            resp = srv.TRS_GetTimeReportByUser_Input_Data(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetStaffMember:
//                        {
//                            resp = srv.TRS_GetStaffMember(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetTimeReportByUserManagerApproval_View_Data:
//                        {
//                            resp = srv.TRS_GetTimeReportByUserManagerApproval_View_Data(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetTimeReportByUserPayRollReport_View_Data:
//                        {
//                            resp = srv.TRS_GetTimeReportByUserPayRollReport_View_Data(clientRequest);
//                            break;
//                        }

//                    case myService.ServiceMethod.TRS_GetSumPayrollReport_DateFromTo:
//                        {
//                            resp = srv.TRS_GetSumPayrollReport_DateFromTo(clientRequest);
//                            break;
//                        }

//                    case myService.ServiceMethod.TRS_GetCustomReportByUsers_DateFromTo:
//                        {
//                            resp = srv.TRS_GetCustomReportByUsers_DateFromTo(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetCustomReportByJobOwnerDateFromTo:
//                        {
//                            resp = srv.TRS_GetCustomReportByJobOwnerDateFromTo(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetOvertimeReport_DateFromTo:
//                        {
//                            resp = srv.TRS_GetOvertimeReport_DateFromTo(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetMorganStanleyReport_DateFromTo:
//                        {
//                            resp = srv.TRS_GetMorganStanleyReport_DateFromTo(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetFirstDayToFillByUser:
//                        {
//                            resp = srv.TRS_GetFirstDayToFillByUser(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetJobListView:
//                        {
//                            resp = srv.TRS_GetJobListView(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetActivityCodeView:
//                        {
//                            resp = srv.TRS_GetActivityCodeView(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetDailyHourLimitByUser:
//                        {
//                            resp = srv.TRS_GetDailyHourLimitByUser(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetCalendarInfo:
//                        {
//                            resp = srv.TRS_GetCalendarInfo(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetTRInputTemplateById:
//                        {
//                            resp = srv.TRS_GetTRInputTemplateById(clientRequest);
//                            break;
//                        }

//                    case myService.ServiceMethod.TRS_GetPhoneDirectoryView:
//                        {
//                            resp = srv.TRS_GetPhoneDirectoryView(clientRequest);
//                            break;
//                        }

//                    case myService.ServiceMethod.TRS_GetPeriodFromTo:
//                        {
//                            resp = srv.TRS_GetPeriodFromTo(clientRequest);
//                            break;
//                        }

//                    case myService.ServiceMethod.TRS_GetTreeView:
//                        {
//                            resp = srv.TRS_GetTreeView(clientRequest);
//                            break;
//                        }

//                    case myService.ServiceMethod.TRS_GetFillOnClickListByUser:
//                        {
//                            resp = srv.TRS_GetFillOnClickListByUser(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetVacationBalance:
//                        {
//                            resp = srv.TRS_GetVacationBalance(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetAllPositions:
//                        {
//                            resp = srv.TRS_GetAllPositions(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetAllStatuses:
//                        {
//                            resp = srv.TRS_GetAllStatuses(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetHRUser:
//                        {
//                            resp = srv.TRS_GetHRUser(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetAllUsers:
//                        {
//                            resp = srv.TRS_GetAllUsers(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_UpdateHRUser:
//                        {
//                            resp = srv.TRS_UpdateHRUser(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_AddHRUser:
//                        {
//                            resp = srv.TRS_AddHRUser(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetWorkingHourTemplates:
//                        {
//                            resp = srv.TRS_GetWorkingHourTemplates(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetAllPMSA:
//                        {
//                            resp = srv.TRS_GetAllPMSA(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetAllContractType:
//                        {
//                            resp = srv.TRS_GetAllContractType(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetAllPosControlling:
//                        {
//                            resp = srv.TRS_GetAllPosControlling(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetAllBudgetPosition:
//                        {
//                            resp = srv.TRS_GetAllBudgetPosition(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_GetAllBank:
//                        {
//                            resp = srv.TRS_GetAllBank(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_ValueValidation:
//                        {
//                            resp = srv.TRS_ValueValidation(clientRequest);
//                            break;
//                        }

//                    case myService.ServiceMethod.TRS_GetTimeReport_Search:
//                        {

//                            switch (clientRequest.reqp_prop_val)
//                            {
//                                case myService.ClientRequestPropValue.Job:
//                                    resp = srv.TRS_GetJobListSearch(clientRequest);
//                                    break;
//                                case myService.ClientRequestPropValue.Activitycode:
//                                    resp = srv.TRS_GetActivityCodeSearch(clientRequest);
//                                    break;
//                                case myService.ClientRequestPropValue.Businessunit:
//                                    resp = srv.TRS_GetBusinessunitSearch(clientRequest);
//                                    break;
//                                case myService.ClientRequestPropValue.LocationIn_Out:
//                                    resp = srv.TRS_GetLocationInOutSearch(clientRequest);
//                                    break;
//                                case myService.ClientRequestPropValue.ReasonCode:
//                                    resp = srv.TRS_GetReasonCodeSearch(clientRequest);
//                                    break;
//                                case myService.ClientRequestPropValue.Windowsname:
//                                    resp = srv.TRS_GetStaffMemberSearch(clientRequest);
//                                    break;
//                                case myService.ClientRequestPropValue.Description:
//                                    resp = srv.TRS_GetDescriptionSearch(clientRequest);
//                                    break;
//                                case myService.ClientRequestPropValue.JobByOwner:
//                                    resp = srv.TRS_GetJobOwnerJobListSearch(clientRequest);
//                                    break;
//                                case myService.ClientRequestPropValue.GroupByOwner:
//                                    resp = srv.TRS_GetJobOwnerGroupListSearch(clientRequest);
//                                    break;
//                                case myService.ClientRequestPropValue.GroupByOwnerSearch:
//                                    resp = srv.TRS_GetJobOwnerJobListSearchByGroup(clientRequest);
//                                    break;
//                                default:
//                                    throw new NotImplementedException("Requested search method is not implemented!");
//                            }

//                            break;

//                        }

//                    case myService.ServiceMethod.TRS_GetWebLocalStorage:
//                        {
//                            resp = srv.TRS_GetWebLocalStorage(clientRequest);
//                            break;
//                        }


//                    #endregion

//                    #region TRS Set


//                    case myService.ServiceMethod.TRS_SetTimeReport_Update_Insert:
//                        {

//                            resp = srv.TRS_SetTimeReport_Update_Insert(clientRequest);
//                            break;
//                        }


//                    case myService.ServiceMethod.TRS_SetTimeReport_Delete:
//                        {

//                            resp = srv.TRS_SetTimeReport_Delete(clientRequest);
//                            break;
//                        }

//                    case myService.ServiceMethod.TRS_SetTimeReport_Submit:
//                        {
//                            resp = srv.TRS_SetTimeReport_Submit(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_SetTimeReport_Reject:
//                        {
//                            resp = srv.TRS_SetTimeReport_Reject(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_SetTransaction_Delete:
//                        {
//                            resp = srv.TRS_SetTransaction_Delete(clientRequest);
//                            break;
//                        }
//                    case myService.ServiceMethod.GetServiceInfo:
//                        {
//                            resp = srv.GetServiceInfo();
//                            break;
//                        }
//                    case myService.ServiceMethod.TRS_SetReportLog_Insert:
//                        {
//                            resp = srv.TRS_SetReportLog_Insert(clientRequest);
//                            break;
//                        }

//                    case myService.ServiceMethod.TRS_SetWebLocalStorage:
//                        {
//                            resp = srv.TRS_SetWebLocalStorage(clientRequest);
//                            break;
//                        }

//                    case myService.ServiceMethod.TRS_SetFillOnClickSubmit:
//                        {
//                            resp = srv.TRS_SetFillOnClickSubmit(clientRequest);
//                            break;
//                        }

//                    default:
//                        throw new NotImplementedException("Requested TRS method is not implemented!");
//                    #endregion

//                };
//            }


//            catch (System.Net.WebException webex)
//            {
               

//            }

//            catch (Exception ex)
//            {
               

//            }
//        }

//        public bool IsReusable
//        {
//            get
//            {
//                return false;
//            }
//        }
//    }

   
//}